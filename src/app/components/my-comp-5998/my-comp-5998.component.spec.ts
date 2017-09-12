import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5998Component } from './my-comp-5998.component';

describe('MyComp5998Component', () => {
  let component: MyComp5998Component;
  let fixture: ComponentFixture<MyComp5998Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5998Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5998Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
