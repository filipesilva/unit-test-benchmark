import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9330Component } from './my-comp-9330.component';

describe('MyComp9330Component', () => {
  let component: MyComp9330Component;
  let fixture: ComponentFixture<MyComp9330Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9330Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
