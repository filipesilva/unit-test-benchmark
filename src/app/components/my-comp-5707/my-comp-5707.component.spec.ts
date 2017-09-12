import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5707Component } from './my-comp-5707.component';

describe('MyComp5707Component', () => {
  let component: MyComp5707Component;
  let fixture: ComponentFixture<MyComp5707Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5707Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
