import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8073Component } from './my-comp-8073.component';

describe('MyComp8073Component', () => {
  let component: MyComp8073Component;
  let fixture: ComponentFixture<MyComp8073Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8073Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8073Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
