import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3784Component } from './my-comp-3784.component';

describe('MyComp3784Component', () => {
  let component: MyComp3784Component;
  let fixture: ComponentFixture<MyComp3784Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3784Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3784Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
