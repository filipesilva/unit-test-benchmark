import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5636Component } from './my-comp-5636.component';

describe('MyComp5636Component', () => {
  let component: MyComp5636Component;
  let fixture: ComponentFixture<MyComp5636Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5636Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
