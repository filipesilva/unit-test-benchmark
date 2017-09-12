import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3776Component } from './my-comp-3776.component';

describe('MyComp3776Component', () => {
  let component: MyComp3776Component;
  let fixture: ComponentFixture<MyComp3776Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3776Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
