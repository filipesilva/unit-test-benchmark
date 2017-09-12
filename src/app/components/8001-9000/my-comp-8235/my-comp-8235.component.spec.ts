import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8235Component } from './my-comp-8235.component';

describe('MyComp8235Component', () => {
  let component: MyComp8235Component;
  let fixture: ComponentFixture<MyComp8235Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8235Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
