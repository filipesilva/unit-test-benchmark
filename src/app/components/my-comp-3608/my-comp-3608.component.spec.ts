import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3608Component } from './my-comp-3608.component';

describe('MyComp3608Component', () => {
  let component: MyComp3608Component;
  let fixture: ComponentFixture<MyComp3608Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3608Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
