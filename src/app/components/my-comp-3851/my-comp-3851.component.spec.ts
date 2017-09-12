import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3851Component } from './my-comp-3851.component';

describe('MyComp3851Component', () => {
  let component: MyComp3851Component;
  let fixture: ComponentFixture<MyComp3851Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3851Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3851Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
