import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3451Component } from './my-comp-3451.component';

describe('MyComp3451Component', () => {
  let component: MyComp3451Component;
  let fixture: ComponentFixture<MyComp3451Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3451Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
