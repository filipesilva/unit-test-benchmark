import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3207Component } from './my-comp-3207.component';

describe('MyComp3207Component', () => {
  let component: MyComp3207Component;
  let fixture: ComponentFixture<MyComp3207Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3207Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
