import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7772Component } from './my-comp-7772.component';

describe('MyComp7772Component', () => {
  let component: MyComp7772Component;
  let fixture: ComponentFixture<MyComp7772Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7772Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7772Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
