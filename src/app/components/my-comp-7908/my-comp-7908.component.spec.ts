import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7908Component } from './my-comp-7908.component';

describe('MyComp7908Component', () => {
  let component: MyComp7908Component;
  let fixture: ComponentFixture<MyComp7908Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7908Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
