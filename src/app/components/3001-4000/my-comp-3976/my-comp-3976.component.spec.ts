import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3976Component } from './my-comp-3976.component';

describe('MyComp3976Component', () => {
  let component: MyComp3976Component;
  let fixture: ComponentFixture<MyComp3976Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3976Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3976Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
