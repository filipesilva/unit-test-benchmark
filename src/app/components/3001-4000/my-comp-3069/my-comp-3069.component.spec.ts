import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3069Component } from './my-comp-3069.component';

describe('MyComp3069Component', () => {
  let component: MyComp3069Component;
  let fixture: ComponentFixture<MyComp3069Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3069Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3069Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
