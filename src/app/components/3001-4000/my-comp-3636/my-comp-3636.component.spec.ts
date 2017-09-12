import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3636Component } from './my-comp-3636.component';

describe('MyComp3636Component', () => {
  let component: MyComp3636Component;
  let fixture: ComponentFixture<MyComp3636Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3636Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
