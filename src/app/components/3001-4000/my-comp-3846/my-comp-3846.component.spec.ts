import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3846Component } from './my-comp-3846.component';

describe('MyComp3846Component', () => {
  let component: MyComp3846Component;
  let fixture: ComponentFixture<MyComp3846Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3846Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3846Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
