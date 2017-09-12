import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8999Component } from './my-comp-8999.component';

describe('MyComp8999Component', () => {
  let component: MyComp8999Component;
  let fixture: ComponentFixture<MyComp8999Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8999Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
