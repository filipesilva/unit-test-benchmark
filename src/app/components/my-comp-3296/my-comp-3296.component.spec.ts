import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3296Component } from './my-comp-3296.component';

describe('MyComp3296Component', () => {
  let component: MyComp3296Component;
  let fixture: ComponentFixture<MyComp3296Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3296Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
