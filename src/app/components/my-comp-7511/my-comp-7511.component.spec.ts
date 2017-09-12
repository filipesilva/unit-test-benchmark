import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7511Component } from './my-comp-7511.component';

describe('MyComp7511Component', () => {
  let component: MyComp7511Component;
  let fixture: ComponentFixture<MyComp7511Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7511Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
