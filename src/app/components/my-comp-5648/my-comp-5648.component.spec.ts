import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5648Component } from './my-comp-5648.component';

describe('MyComp5648Component', () => {
  let component: MyComp5648Component;
  let fixture: ComponentFixture<MyComp5648Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5648Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
