import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp138Component } from './my-comp-138.component';

describe('MyComp138Component', () => {
  let component: MyComp138Component;
  let fixture: ComponentFixture<MyComp138Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp138Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
