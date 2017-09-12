import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7765Component } from './my-comp-7765.component';

describe('MyComp7765Component', () => {
  let component: MyComp7765Component;
  let fixture: ComponentFixture<MyComp7765Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7765Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
