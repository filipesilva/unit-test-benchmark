import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5703Component } from './my-comp-5703.component';

describe('MyComp5703Component', () => {
  let component: MyComp5703Component;
  let fixture: ComponentFixture<MyComp5703Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5703Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
