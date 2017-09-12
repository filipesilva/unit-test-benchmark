import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5603Component } from './my-comp-5603.component';

describe('MyComp5603Component', () => {
  let component: MyComp5603Component;
  let fixture: ComponentFixture<MyComp5603Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5603Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
