import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3628Component } from './my-comp-3628.component';

describe('MyComp3628Component', () => {
  let component: MyComp3628Component;
  let fixture: ComponentFixture<MyComp3628Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3628Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
