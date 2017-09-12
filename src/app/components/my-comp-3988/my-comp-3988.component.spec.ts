import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3988Component } from './my-comp-3988.component';

describe('MyComp3988Component', () => {
  let component: MyComp3988Component;
  let fixture: ComponentFixture<MyComp3988Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3988Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3988Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
