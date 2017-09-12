import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3952Component } from './my-comp-3952.component';

describe('MyComp3952Component', () => {
  let component: MyComp3952Component;
  let fixture: ComponentFixture<MyComp3952Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3952Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
