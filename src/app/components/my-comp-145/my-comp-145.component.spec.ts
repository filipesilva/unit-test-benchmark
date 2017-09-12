import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp145Component } from './my-comp-145.component';

describe('MyComp145Component', () => {
  let component: MyComp145Component;
  let fixture: ComponentFixture<MyComp145Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp145Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
