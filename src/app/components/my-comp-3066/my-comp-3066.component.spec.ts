import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3066Component } from './my-comp-3066.component';

describe('MyComp3066Component', () => {
  let component: MyComp3066Component;
  let fixture: ComponentFixture<MyComp3066Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3066Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3066Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
