import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4514Component } from './my-comp-4514.component';

describe('MyComp4514Component', () => {
  let component: MyComp4514Component;
  let fixture: ComponentFixture<MyComp4514Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4514Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
