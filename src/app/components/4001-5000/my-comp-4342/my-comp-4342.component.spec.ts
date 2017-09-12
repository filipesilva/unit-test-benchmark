import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4342Component } from './my-comp-4342.component';

describe('MyComp4342Component', () => {
  let component: MyComp4342Component;
  let fixture: ComponentFixture<MyComp4342Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4342Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
