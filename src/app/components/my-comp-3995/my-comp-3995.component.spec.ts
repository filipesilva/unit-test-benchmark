import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3995Component } from './my-comp-3995.component';

describe('MyComp3995Component', () => {
  let component: MyComp3995Component;
  let fixture: ComponentFixture<MyComp3995Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3995Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
