import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3590Component } from './my-comp-3590.component';

describe('MyComp3590Component', () => {
  let component: MyComp3590Component;
  let fixture: ComponentFixture<MyComp3590Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3590Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
