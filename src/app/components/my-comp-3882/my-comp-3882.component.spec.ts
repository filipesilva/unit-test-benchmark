import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3882Component } from './my-comp-3882.component';

describe('MyComp3882Component', () => {
  let component: MyComp3882Component;
  let fixture: ComponentFixture<MyComp3882Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3882Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
