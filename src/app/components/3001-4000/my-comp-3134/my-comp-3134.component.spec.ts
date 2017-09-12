import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3134Component } from './my-comp-3134.component';

describe('MyComp3134Component', () => {
  let component: MyComp3134Component;
  let fixture: ComponentFixture<MyComp3134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
