import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7244Component } from './my-comp-7244.component';

describe('MyComp7244Component', () => {
  let component: MyComp7244Component;
  let fixture: ComponentFixture<MyComp7244Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7244Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
