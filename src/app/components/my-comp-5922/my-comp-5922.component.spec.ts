import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5922Component } from './my-comp-5922.component';

describe('MyComp5922Component', () => {
  let component: MyComp5922Component;
  let fixture: ComponentFixture<MyComp5922Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5922Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
