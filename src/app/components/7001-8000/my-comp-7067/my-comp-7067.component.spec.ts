import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7067Component } from './my-comp-7067.component';

describe('MyComp7067Component', () => {
  let component: MyComp7067Component;
  let fixture: ComponentFixture<MyComp7067Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7067Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7067Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
