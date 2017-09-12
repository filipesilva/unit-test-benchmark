import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4942Component } from './my-comp-4942.component';

describe('MyComp4942Component', () => {
  let component: MyComp4942Component;
  let fixture: ComponentFixture<MyComp4942Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4942Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
