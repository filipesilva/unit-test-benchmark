import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3305Component } from './my-comp-3305.component';

describe('MyComp3305Component', () => {
  let component: MyComp3305Component;
  let fixture: ComponentFixture<MyComp3305Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3305Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
