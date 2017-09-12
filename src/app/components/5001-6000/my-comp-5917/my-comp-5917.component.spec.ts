import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5917Component } from './my-comp-5917.component';

describe('MyComp5917Component', () => {
  let component: MyComp5917Component;
  let fixture: ComponentFixture<MyComp5917Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5917Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
