import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5183Component } from './my-comp-5183.component';

describe('MyComp5183Component', () => {
  let component: MyComp5183Component;
  let fixture: ComponentFixture<MyComp5183Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5183Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
