import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3422Component } from './my-comp-3422.component';

describe('MyComp3422Component', () => {
  let component: MyComp3422Component;
  let fixture: ComponentFixture<MyComp3422Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3422Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
