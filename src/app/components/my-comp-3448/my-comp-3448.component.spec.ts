import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3448Component } from './my-comp-3448.component';

describe('MyComp3448Component', () => {
  let component: MyComp3448Component;
  let fixture: ComponentFixture<MyComp3448Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3448Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
