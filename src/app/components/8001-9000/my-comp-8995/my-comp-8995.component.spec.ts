import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8995Component } from './my-comp-8995.component';

describe('MyComp8995Component', () => {
  let component: MyComp8995Component;
  let fixture: ComponentFixture<MyComp8995Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8995Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
