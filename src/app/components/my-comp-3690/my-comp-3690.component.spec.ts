import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3690Component } from './my-comp-3690.component';

describe('MyComp3690Component', () => {
  let component: MyComp3690Component;
  let fixture: ComponentFixture<MyComp3690Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3690Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
