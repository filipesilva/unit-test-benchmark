import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8618Component } from './my-comp-8618.component';

describe('MyComp8618Component', () => {
  let component: MyComp8618Component;
  let fixture: ComponentFixture<MyComp8618Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8618Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
