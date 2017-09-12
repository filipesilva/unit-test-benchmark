import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4837Component } from './my-comp-4837.component';

describe('MyComp4837Component', () => {
  let component: MyComp4837Component;
  let fixture: ComponentFixture<MyComp4837Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4837Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
