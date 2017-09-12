import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6329Component } from './my-comp-6329.component';

describe('MyComp6329Component', () => {
  let component: MyComp6329Component;
  let fixture: ComponentFixture<MyComp6329Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6329Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
