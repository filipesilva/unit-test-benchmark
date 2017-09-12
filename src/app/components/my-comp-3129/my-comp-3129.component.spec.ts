import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3129Component } from './my-comp-3129.component';

describe('MyComp3129Component', () => {
  let component: MyComp3129Component;
  let fixture: ComponentFixture<MyComp3129Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3129Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
