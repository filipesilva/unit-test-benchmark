import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5921Component } from './my-comp-5921.component';

describe('MyComp5921Component', () => {
  let component: MyComp5921Component;
  let fixture: ComponentFixture<MyComp5921Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5921Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5921Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
