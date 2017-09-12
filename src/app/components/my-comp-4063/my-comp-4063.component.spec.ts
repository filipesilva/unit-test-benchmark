import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4063Component } from './my-comp-4063.component';

describe('MyComp4063Component', () => {
  let component: MyComp4063Component;
  let fixture: ComponentFixture<MyComp4063Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4063Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4063Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
